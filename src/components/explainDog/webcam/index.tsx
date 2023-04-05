import { RefObject } from "react";
import { WebCamContainer } from "./styles";

type WebCamProps = {
    divRef: RefObject<HTMLDivElement> | null | undefined,
}


function WebCam({divRef}:  WebCamProps) {    
    return (
       <WebCamContainer ref={divRef}>
       </WebCamContainer>
    )
}

export default WebCam;