const TimeIapse = ({ secTime, hourTime }) => {
    // sec Unit
    const sec = 60;
    const min = 60;
    const hours = 360;
    const days = 86400;

    // hour Unit
    const hourType = 24;
    let hourDiv = hourTime / 24;
    const daysdiv = hourTime % 24;

    let msg = "";
    let num = 0;
    let stringNum =""

    let numDiv = 0;
    let stringNumDiv = "0";

    
    if (hourTime === 0) {
        if (secTime === 0){
            return "-";

        } else if(days -1 < secTime ){
            num = Math.floor(secTime/days)
            stringNum = String(num)
            msg = stringNum + "일";
            return msg;

        } else if(hours -1 < secTime < days){
            num = Math.floor(secTime/hours)
            stringNum = String(num)
            msg = stringNum + "시간";
            return msg;
            
        } else if(min - 1 < secTime < hours){
            num = Math.floor(secTime/min)
            stringNum = String(num)
            msg = stringNum + "분";
            return msg;

        } else if (secTime < sec){
            msg = "방금";
            return msg;

        }
    } else {
        if (hourTime < hourType ){
            stringNum = String(hourTime)
            msg = stringNum + "시간";
            return msg;

        } else if (hourDiv){
            num = Math.floor(hourDiv)
            numDiv = Math.floor(daysdiv)
            stringNum = String(num)
            stringNumDiv = String(numDiv)
            numDiv === 0
                ?   msg = stringNum + "일 "
                :   msg = stringNum + "일 " + stringNumDiv + "시간";
            
            return msg;
        }
    }
};

export default TimeIapse;
