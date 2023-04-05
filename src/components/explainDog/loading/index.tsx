import LoadingOverlayWrapper from "react-loading-overlay-ts";
import { LoadingContainer } from "./styles";

type LoadProp = {
    isLoading: boolean
}

export function Loading({ isLoading }: LoadProp) {

    return (
        <LoadingContainer>
            <div className="test"></div>
            <LoadingOverlayWrapper
                active={isLoading}
                spinner
                text='Carregando...'
            ></LoadingOverlayWrapper>
        </LoadingContainer>
    );
}