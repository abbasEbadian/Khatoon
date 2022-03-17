import React from 'react'

function TextHeadTiltle(props) {
    return (
        <>
            <h5 className="text_head text-right py-4">
                {props.title}
                {props.underline_dec && <div className="underline_dec">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
            </h5>
            <p className="text-right pb-5">
                {props.description}
            </p>
        </>
    )
}


export default TextHeadTiltle