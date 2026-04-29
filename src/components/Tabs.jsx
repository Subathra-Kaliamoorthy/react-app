export default function Examples({children, buttons, ButtonsContainer}) {
    // const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}