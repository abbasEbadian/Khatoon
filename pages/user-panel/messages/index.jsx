import React from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {toast} from 'react-toastify'
import * as e from '../../../redux/endpoints'
import { 
  MainContainer,ChatContainer, MessageList,
   Message, MessageInput, Sidebar, Search,
    ConversationList,  Conversation, Avatar,
    lillyIco, joeIco,zoeIco, ConversationHeader,EllipsisButton,
    TypingIndicator, MessageSeparator, InputToolbox, 
  } from '@chatscope/chat-ui-kit-react';

import axios from 'axios';
import { market_imlink, user_imlink } from '../../../components/utils';
import UserPanelBase from '../../../components/UserPanelBase';
import { profile } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useRouter} from 'next/router'


function ChatPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {chat_id} = router.query
  const [chatActivated, setChatActivated] = React.useState(false)
  const [messageInputValue, setMessageInputValue] = React.useState("")
  
  const [chatList, setChatList] = React.useState([])
  const [activeChat, setActiveChat] = React.useState(null)
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const [sidebarStyle, setSidebarStyle] = React.useState({});
  const [conversationContentStyle, setConversationContentStyle] = React.useState({});

  const refreshMessages = (chat=undefined) =>{
      axios.get(e.GET_CHATS_OF_USER)
      .then(response=>{
        setChatList(response.data)
        if(chat || activeChat)
          setActiveChat(chat || response.data.find(item => item.id === activeChat.id))
      })
      .catch(e=>{
        console.log(e);
        toast.error("خطا در دریافت اطلاعات")
      })

    }
    const setSeenChat = (chat) =>{
      axios.post(e.SET_SEEN_USER, {chat_id: chat.id})
      .then(response=>{
          refreshMessages(chat)
          dispatch(profile())          
      })
      .catch(err=>console.log(err))
    }
    React.useEffect(()=>{refreshMessages()}, [])

    React.useEffect(()=>{
      if(chat_id && !chatActivated && chatList.length && chatList.find(item=>item.id === +chat_id)){
        handleConversationClick(chatList.find(item=>item.id === +chat_id))
        setChatActivated(true)
      }
    }, [chat_id, chatList, setActiveChat])
    const get_model = (message) =>{
      const isuser = message.sender === "user"
      return [
          !isuser? user_imlink(message.chat_id?.user?.avatar_image)
          : market_imlink(message.chat_id?.market?.image)
        ,{
        message: message.text,
        sentTime: new Date(message.created).toLocaleDateString('fa', {month: '2-digit', day: '2-digit', hour: '2-digit', minute: "2-digit"}),
        sender: !isuser ? message.chat_id.market.user.first_name : "شما",
        direction: !isuser?"incoming":"outgoing",
        position: "single"
      }]
    }


    const sendMessage = ()=>{
      const data = {
        chat_id: activeChat.id,
        text: messageInputValue,
        sender: "user",
      }
      axios.post(e.SEND_MESSAGE, data)
      .then(response=>{
        const {data} = response
        if(data.error)
          toast.error("خطا در ارسال")
          else
          setActiveChat(data.chat)
        })
        .catch(e=>{  
          toast.error("خطا در ارسال")
        })
        setMessageInputValue("")
    }

    const handleBackClick = () => {
      setSidebarVisible(!sidebarVisible);
      setActiveChat(null)
    }
  
    const handleConversationClick = (chat) => {
      // setActiveChat(chat)
      setSeenChat(chat)
    }
    return (
    <div id="chat-page">
        <UserPanelBase active={"messages"}>

        <div style={{ position:"relative", height: "500px", direction: "ltr"  }}>
        <MainContainer responsive>                
              
              <ChatContainer >
                <ConversationHeader>
                  
                  
                    <ConversationHeader.Back onClick={handleBackClick} />
                    <Avatar style={{"display": (!activeChat? "none": "block")} } src={activeChat? market_imlink(activeChat?.market?.image): ""} />
                    <ConversationHeader.Content s tyle={conversationContentStyle} userName={activeChat? (activeChat?.market?.name ? activeChat.market.name: "کاربر خاتون") : "گفتگوها"} />
                  
                    

                  <ConversationHeader.Actions>
                    <RestartAltIcon style={{"display": (!activeChat? "none": "block")} } role="button" onClick={e=>refreshMessages(activeChat) } />
                  </ConversationHeader.Actions>          
                </ConversationHeader>
                <MessageList>
                  {activeChat &&  activeChat.messages ?  activeChat.messages.map((item, idx)=>{
                    const [avatar, model] = get_model(item)
                    return <Message key={item.id} model={model}>
                      <Message.Header sender={model.sender} />
                      <Avatar src={avatar} name={"Test"}   />
                      <Message.Footer sentTime={model.sentTime} />
                  </Message>
                  }): ""}
                  
                </MessageList>
               
                {activeChat && <MessageInput attachButton={false} onSend={sendMessage} placeholder="پیام خود را بنویسید" value={messageInputValue} onChange={val => setMessageInputValue(val)} />}
              </ChatContainer>    

              <Sidebar position="right" scrollable={false}  style={sidebarStyle}>
                <Search placeholder="جستجو ... " className="text-start"  />
                <ConversationList >      
                  {chatList?.map(chat=>{
                    return <Conversation 
                            unreadCnt={chat.messages.filter(i=>i.sender==='market' && !i.seen).length} 
                            name={chat?.market?.name || "کاربر خاتون"} key={chat.id}
                            onClick={e=>handleConversationClick(chat)} >
                      <Avatar src={market_imlink(chat?.market?.image)} name={chat?.market?.name}  />
                    </Conversation>
                  })}                                            
                  
                </ConversationList>
              </Sidebar>
                                   
            </MainContainer>

        </div>
        </UserPanelBase>

    </div>
  )
}

export default ChatPage