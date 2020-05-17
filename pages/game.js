import axios from'axios'
import React from 'react'
import Navbar from '../components/Navbar'
import Question from '../components/Question'
import Hint from '../components/Hint'
import Submit from '../components/Submit'
import Particles from 'react-particles-js';
import Answer from '../components/Answer'


class game extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            answer:"",
            questions:"Hola. This is the question.This is the question.This is the question.This is the question.This is the question.This is the question.This is the question."
            //to store the questions from api
        }
        this.submit=this.submit.bind(this);
        this.change=this.change.bind(this);
        this.checkAns=this.checkAns.bind(this);
        this.getQuestions=this.getQuestions.bind(this);
    }

    componentDidMount()
    {
        this.getQuestions();
    }

    getQuestions(){
        console.log("YO");//get questions from api
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>
        {
          let r=response.data.title;
          console.log(r);
          this.setState(prevState=>{
            return{ ...prevState, questions:r}
          });
          

    });
    }

    submit=()=>{//send final answer for checking
        
        console.log(this.state.answer);
        this.checkAns(this.state.answer);
    }

    change=(event)=>{//keep updating answer
        let e= event.target.value; 
        this.setState(prevState=> {
        return { ...prevState, answer:e }
    });
    

    
    
    }

    checkAns(answer)//check answer from api and send for correct alert
    {
        console.log(answer);//

    }
    
    render()
    {

    
    return (
        <div>
            <Particles

                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 900,
                            }

                        },
                        color: {
                            value: ['#cc0000']
                        },
                        line_linked: {
                            color: '#aa0044',
                            opacity: 1
                        }
                    },
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "fixed",
                    index: "-10"


                }}
            />

            <Navbar />
            <Question qs={this.state.questions} />
            <Answer change={this.change} />
            <Submit submit={this.submit} />
            
            <div>


                <Hint />
                <style jsx>{`
    div{
        text-align:center;
        margin:5px;
    }
    `}</style>

            </div>



        </div >
    );
}
}
export default game;

