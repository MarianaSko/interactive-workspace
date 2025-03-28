import Button from "../Button";

const ControlButtons = ({
  startTracking,
  stopTracking,
  resetTracking,
  isRunning,
}) => {
  return (
    <div className="mb-4 flex gap-2">
      <Button onClick={startTracking} disabled={isRunning}>
        Start
      </Button>
      <Button onClick={stopTracking} disabled={!isRunning}>
        Stop
      </Button>
      <Button onClick={resetTracking}>Reset</Button>
    </div>
  );
};

export default ControlButtons;
