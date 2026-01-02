import {
  BoardWrapper,
  CardsFlex,
  Card,
  CardTitle,
  CardText,
} from "./PageBoard.styled";

export const PageBoard = ({ data }) => {
  return (
    <BoardWrapper>
      <CardsFlex>
        {data.map(({ name, location, speaker, type, time }, index) => (
          <Card key={index}>
            <CardTitle>{name}</CardTitle>

            <CardText>📍 {location}</CardText>
            <CardText>👤 {speaker}</CardText>
            <CardText>📅 {time.start}</CardText>
            <CardText>⏱ {type}</CardText>
          </Card>
        ))}
      </CardsFlex>
    </BoardWrapper>
  );
};
