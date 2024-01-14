interface ButtonComponentProps {
    value?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function ButtonComponent({ value, type }: ButtonComponentProps) {
  return (
    <div>
        <h1>Este es un boton</h1>
        <button className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"} type={type}>{value}</button>
        <ul>
            <li>Lista</li>
        </ul>
    </div>

  )
}