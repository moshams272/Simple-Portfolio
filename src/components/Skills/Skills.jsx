import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from 'react-bootstrap/ProgressBar';
import skillStyle from "./Skills.module.css"
export default function Skills() {
  return (
    <>
      <div className={skillStyle.skills}>
        <h1 style={{color:"#c0ffaa"}}>Skills</h1>
        <br/>
        <ListGroup>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>CSS <ProgressBar variant="success" animated now={65} label={`65%`} /></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>HTML <ProgressBar variant="success" animated now={70} label={`70%`} /></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>JavaScript <ProgressBar variant="success" animated now={60} label={`60%`} /></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>Problem Solving <ProgressBar variant="success" animated now={85} label={`85%`} /></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>Data Structure And Algorithm <ProgressBar variant="success" animated now={55} label={`55%`} /></ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"inherit",border:"0px",color:"#c0ffaa"}}>Object Oriented Programming <ProgressBar variant="success" animated now={75} label={`75%`} /></ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
