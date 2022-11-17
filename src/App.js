import "./App.css";
import Button from 'react-bootstrap/Button';
import Navs from "./Profile/Navs"
import Profiles from "./Profile/Profiles"
import Card from 'react-bootstrap/Card';
import user1 from '../src/images/user1.jpg'
import user2 from '../src/images/user2.jpg'
import user3 from '../src/images/user3.jpg' 


const App =() => {

  const appel = (fullName) => {
    alert('My Name IS '+ fullName)
  }

  // const profiles = [{
  //           id: "1",
  //           fullName: "Amine Sani",
  //           Bio: "Il définit alors l'architecture des machines automatisées qui fabriquent des moteurs ou assemblent des carrosseries. Puis, il supervise leur installation.",
  //           profission: "Ingénieur Mécanique",
  //           image: "../Profile/images/user1.jpg",
  //       }
  //       {
  //           id: "2",
  //           fullName: "Ahmed Hsoumi",
  //           Bio: "They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.",
  //           profission: "Doctor",
  //           image: "../Profile/images/user2.jpg",
  //       },
  //       {
  //           id: "3",
  //           fullName: "Mahdi Hsoumi",
  //           Bio: "Il peut intervenir dans deux domaines complémentaires : l'ingénierie logicielle ou « software engineer » et l'ingénierie matérielle ou « hardware engineer ».",
  //           profission: "Ingénieur Informatique",
  //           image: "../Profile/images/user3.jpg",
  //       },
  //   ];
  
  return (
    <div className="App">
     <Navs />
<div className="users">
     <div>
     <Profiles fullName="Amine Sani" Bio="Il définit alors l'architecture des machines automatisées qui fabriquent des moteurs ou assemblent des carrosseries. Puis, il supervise leur installation." profission="Ingénieur Mécanique">
     <div>
     <img src={user1} alt="" />
     </div>
     </Profiles>
     <div>
     <Button onClick={() => appel('Amine Sani')} className="btn" variant="primary">See More</Button>{' '}
     </div>
     </div>

     <div>
     <Profiles fullName="Ahmed Hsoumi" Bio="They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health " profission="Doctor">
     <div>
     <img src={user2} alt="" />
     </div>
     
     </Profiles>

     <div>
     <Button onClick={() => appel('Ahmed Hsoumi')} className="btn" variant="primary">See More</Button>{' '}
     </div>
     
     </div>

     <div>
     <Profiles fullName="Mahdi Hsoumi" Bio="Il peut intervenir dans deux domaines complémentaires : l'ingénierie logicielle ou « software engineer » et l'ingénierie matérielle ou « hardware engineer »." profission="Ingénieur Informatique">
     <div>
     <img src={user3} alt="" />
     </div>
     </Profiles>
     <div>
     <Button onClick={() => appel('Mahdi Hsoumi')} className="btn" variant="primary">See More</Button>{' '}
     </div>
     </div>
     </div>
     
    </div>

  )
}

export default App;
