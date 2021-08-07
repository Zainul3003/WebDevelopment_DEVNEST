const BoxW = () => {
    return(<div className="boxW"></div>);
 };
 
 const BoxB = () => {
     return(<div className="boxB"></div>);
 };
 
 const RowO = () => {
     let arr = [];
     for(let i=0;i<8;i++)
     {
         if(i%2===0){
             arr.push(<BoxW/>);
         }
         else{
             arr.push(<BoxB/>);
         }
     }
 
     return(
         <div className="rowO">
             {arr}
         </div>
     );
 };
 
 const RowE = () => {
     let arr1 = [];
     for(let i=0;i<8;i++)
     {
         if(i%2===0){
             arr1.push(<BoxB/>);
         }
         else{
             arr1.push(<BoxW/>);
         }
     }
 
     return(
         <div className="rowE">
             {arr1}
         </div>
     );
 };
 
 const Board = () => {
     let row = []
     for(let i=0;i<8;i++)
     {
         if(i%2===0){
             row.push(<RowE/>);
         }
         else{
             row.push(<RowO/>);
         }
     }
 
     return(
         <div className="board">{row}</div>
     );
 };
 
 export default Board;
