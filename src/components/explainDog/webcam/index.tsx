import { RefObject, useState, useEffect, useRef } from "react";
import { WebCamContainer } from "./styles";

type WebCamProps = {
    divRef: RefObject<HTMLDivElement> | null | undefined,
}

function WebCam({divRef}:  WebCamProps) {    
    
    return (
       <WebCamContainer ref={divRef} />
    )
}

export default WebCam;