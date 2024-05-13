import * as N from "./NotificationListItem.styled";
import { FaRegTrashCan } from "react-icons/fa6";
import { colors } from "@/styles/theme";
import { useNavigate } from "react-router-dom";

interface NotificaionProps {
  content: string;
  createDateTime: string;
  type: string;
  eventId?: number;
  fundingId?: number;
  pageUri?: string;
  notificationId: string;
  eventTitle?: string;
  handleDelete: (notificationId: string) => void;
}

const NotificationListItem = (props: NotificaionProps) => {
  const {
    content,
    createDateTime,
    type,
    eventId,
    fundingId,
    pageUri,
    notificationId,
    handleDelete,
    eventTitle,
  } = props;

  const navigate = useNavigate();

  const goNavigate = () => {
    switch (type) {
      case "EVENT_CREATE":
        navigate(`/celebrate/rolling/${eventId}/${pageUri}`);
        break;
      case "FUNDING_APPROVED":
        navigate(`/celebrate/funding/${fundingId}`);
        break;
      case "EVENT_OPEN":
        navigate(`/celebrate/rolling/${eventId}/${pageUri}`);
        break;
      case "FUNDING_COMPLETE":
        navigate(`/celebrate/funding/${fundingId}`);
        break;
      case "FUNDING_DISAPPROVED":
        navigate(`/celebrate/rolling/${eventId}/fundings`);
        break;
    }
  };

  const setImage = (type: string) => {
    switch (type) {
      case "EVENT_CREATE":
        return {
          src: "icon/icon_alarm_event.png",
          width: "20px",
          height: "20px",
        };
      case "FUNDING_APPROVED":
        return {
          src: "icon/icon_alarm_funding_end.png",
          width: "30px",
          height: "30px",
        };
      case "EVENT_OPEN":
        return {
          src: "icon/icon_alarm_dday.png",
          width: "26px",
          height: "25px",
        };
      case "FUNDING_COMPLETE":
        return {
          src: "icon/icon_alarm_funding_success.png",
          width: "25px",
          height: "23.1px",
        };
      case "FUNDING_DISAPPROVED":
        return {
          src: "icon/icon_alarm_funding_fail.png",
          width: "25px",
          height: "25px",
        };
    }
  };

  const icon = setImage(type);
  const formatDate =
    createDateTime.split("T")[0] + " " + createDateTime.split("T")[1];

  return (
    <N.Container onClick={goNavigate}>
      <N.Wrap>
        <N.LeftWrap>
          <N.ImgWrap>
            <img src={icon?.src} alt="icon" />
          </N.ImgWrap>
          <N.TextWrap>
            <N.Comment>{content}</N.Comment>
            <N.Title>{eventTitle}</N.Title>
            <N.Date>{formatDate}</N.Date>
          </N.TextWrap>
        </N.LeftWrap>
        <N.Delete>
          <FaRegTrashCan
            color={colors.gray}
            onClick={(e) => {
              e.stopPropagation(); // 부모요소로 bubble 되는 것을 막음
              handleDelete(notificationId);
            }}
          />
        </N.Delete>
      </N.Wrap>
    </N.Container>
  );
};

export default NotificationListItem;
