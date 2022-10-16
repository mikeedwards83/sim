export const DateFormatted = (props: { date: string }) => {


    const date = new Date(props.date);

    const pad = (zeros: number, num: number) => {
        return String(num).padStart(zeros, "0")
    }

    return (
        <span>
            {date.getFullYear()}/
            {pad(2, date.getMonth() + 1)}/
            {pad(2, date.getDate())}
            &nbsp;
            {pad(2, date.getHours())}:
            {pad(2, date.getMinutes())}:
            {pad(2, date.getSeconds())}
        </span>

    )
}