type HeaderProps = {
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
    setpicDate: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({handleSubmit, setpicDate}: HeaderProps) => {
    return (
    <header>
        <h1>Enter a date below to get the NASA Picture of the Day</h1>
        <div>
          <input placeholder="YYYY-MM-DD" aria-label="APOD date" aria-describedby="button-addon2" onChange={setpicDate} />
          <button id="button-addon2" onClick={handleSubmit}>Get Picture</button>
        </div>
      </header>
    )
}
export default Header