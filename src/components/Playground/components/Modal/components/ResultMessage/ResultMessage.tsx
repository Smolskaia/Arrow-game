// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <span>
      Congratulations! <br /> You win!
    </span>
  ) : (
    <span>
      My regrets. <br /> You have lost!
    </span>
  )
}

export default ResultMessage
