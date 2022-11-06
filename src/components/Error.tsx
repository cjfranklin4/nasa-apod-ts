type ErrorProps = {
    errorMes: string
}

const Error = ({errorMes}: ErrorProps) => {
    return (
        <div>{errorMes}</div>
    )
}

export default Error