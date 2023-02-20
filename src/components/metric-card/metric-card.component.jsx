import "./metric-card.styles.css";

const CARD_TYPE_CLASSES = {
  all_visitors: "all_visitors",
  contract: "contract",
  meeting: "meeting",
  official: "official",
  emergency: "emergency",
};

const MetricCard = ({ children, cardType, ...otherProps }) => {
  return (
    <div
      className={`metric-card-container ${CARD_TYPE_CLASSES[cardType]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
export default MetricCard;
