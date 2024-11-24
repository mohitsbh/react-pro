import React from 'react'
import "./Calc.css"
function Calc() {
    function CalcBtn(props) {
        return (
            <button className={props.className}>{props.value}</button>
        )
    }
    return (
        <div className='app-container'>
            <div className="Calc">
                <div>
                    <CalcBtn className="btn" value="7" />
                    <CalcBtn className="btn" value="8" />
                    <CalcBtn className="btn" value="9" />
                    <CalcBtn className="btn btn_1" value="*" />
                </div>
                <div>
                    <CalcBtn className="btn" value="4" />
                    <CalcBtn className="btn" value="5" />
                    <CalcBtn className="btn" value="6" />
                    <CalcBtn className="btn btn_1 l" value="/" />
                </div>
                <div>
                    <CalcBtn className="btn" value="1" />
                    <CalcBtn className="btn" value="2" />
                    <CalcBtn className="btn" value="3" />
                    <CalcBtn className="btn btn_1" value="+" />

                </div>
                <div>
                    <CalcBtn className="btn" value="0" />
                    <CalcBtn className="btn" value="AC" />
                    <CalcBtn className="btn" value="=" />
                    <CalcBtn className="btn btn_1" value="-" />
                </div>
            </div>
        </div>
    )
}

export default Calc