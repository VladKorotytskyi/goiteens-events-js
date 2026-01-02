import {
  BoardWrapper,
  CardsFlex,
  Card,
  CardTitle,
  CardText,
} from "./PageBoard.styled";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export const PageBoard = ({ data }) => {
  return (
    <BoardWrapper>
      <CardsFlex>
        {data.map(({ name, location, speaker, type, time }, index) => (
          <Card key={index}>
            <CardTitle>{name}</CardTitle>

            <CardText>
              <FaLocationDot color="#fa6c6c" />
              {location}
            </CardText>
            <CardText>
              <FaChalkboardTeacher />
              {speaker}
            </CardText>
            <CardText>
              <FaCalendarAlt color="#ff8585" />
              {time.start}
            </CardText>
            <CardText>
              <FaMoneyBillWave color="#007e28" />
              {type}
            </CardText>
          </Card>
        ))}
      </CardsFlex>
    </BoardWrapper>
  );
};
