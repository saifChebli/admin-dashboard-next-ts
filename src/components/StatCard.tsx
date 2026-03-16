

interface Props {
    title : string
    value : number | string
}

const StatCard = ({title , value} : Props) => {
  return (
    <div className="border border-gray-200 p-6 rounded-md shadow-md">
        <h3 className="text-gray-500 font-bold">
            {title}
        </h3>
        <p className="text-2xl font-bold">
            {value}
        </p>
    </div>
  )
}

export default StatCard