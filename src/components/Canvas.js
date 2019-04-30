import React, { Component } from 'react'
import PicFrame from './PicFrame';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,

    Container,

} from 'reactstrap';

export class Canvas extends Component {

    state = {
        
        points: 0,
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
        card8: false,
        card9: false,
        card10: false,
        card11: false,
        card12: false,

        modal: false

    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    lose = () => {
        console.log('YOU LOST')
        this.setState({ points: 0})
        this.toggle()
    }
    onClick = async (id) => {
                     
        await this.setState({ points: this.state.points + 1})

        switch (id) {
            case 1:
                if(this.state.card1){
                    this.lose();
                }
                this.setState({ card1: true });
                break;
            case 2:
                if(this.state.card2){
                    this.lose();
                }
                this.setState({ card2: true });
                break;
            case 3:
                if(this.state.card3){
                    this.lose();
                }
                this.setState({ card3: true });
                break;
            case 4:
                if(this.state.card4){
                    this.lose();
                } 
                this.setState({ card4: true });
                break;
            case 5:
                if(this.state.card5){
                    this.lose();
                }
                this.setState({ card5: true });
                break;
            case 6:
                if(this.state.card6){
                    this.lose();
                }
                this.setState({ card6: true });
                break;
            case 7:
                if(this.state.card7){
                    this.lose();
                }
                this.setState({ card7: true });
                break;
            case 8:
                if(this.state.card8){
                    this.lose();
                }
                this.setState({ card8: true });
                break;
            case 9:
                if(this.state.card9){
                    this.lose();
                }
                this.setState({ card9: true });
                break;
            case 10:
                if(this.state.card10){
                    this.lose();
                }
                this.setState({ card10: true });
                break;
            case 11:
                if(this.state.card11){
                    this.lose();
                }
                this.setState({ card11: true });
                break;
            case 12:
                if(this.state.card12){
                    this.lose();
                }
                this.setState({ card12: true });
                break;
            default:
                break;
        }
        
        
        
    }

    if(){

    }
    
    createPics = () => {

        let pics = []
        
        

        for (let index = 1; index <= 12; index++) {
            let id = index
            var imageBG;
            if(index === 1){
                imageBG = 'url("pic1.png")'
            } else if(index === 2){
                imageBG = 'url("pic2.png")'
            } else if(index === 3){
                imageBG = 'url("pic3.png")'
            } else if(index === 4){
                imageBG = 'url("pic4.png")'
            } else if(index === 5){
                imageBG = 'url("pic5.png")'
            } else if(index === 6){
                imageBG = 'url("pic6.png")'
            } else if(index === 7){
                imageBG = 'url("pic7.png")'
            } else if(index === 8){
                imageBG = 'url("pic8.png")'
            } else if(index === 9){
                imageBG = 'url("pic9.png")'
            } else if(index === 10){
                imageBG = 'url("pic10.png")'
            } else if(index === 11){
                imageBG = 'url("pic11.png")'
            } else if(index === 12){
                imageBG = 'url("pic12.png")'
            }
            
                    
                
            pics.push(<PicFrame
                
                
                key={index}
                id={'number'+(index)}
                btn={this.onClick.bind(this, id)}
                number={index}
                bgimage={imageBG}
                
                />)

                
        }
        
       ///
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function updateShuffle(){
            shuffle(pics)
        }

        updateShuffle()
        
        return  pics
        
    }

  render() {
    return (
      <div>
          <Container>
              <p id="rnd">
                Click on an image to earn points, but don't click on any more than once!  
              </p>
          
              <h1>Your Score: {this.state.points} </h1>
            <div className='canvasLay'>
                {this.createPics()}
            </div>
          </Container>

          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            You Lost
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="book">
                You guessed incorrectly!
                </Label>
                
                <Button

                  color="dark"
                  style={{marginTop: '2rem'}}
                  block

                >
                  Play Again
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}


export default Canvas