
const state = atom({
  key: "simplestate",
  default: {
    name: 'hey'
  }
});

const App = () => {
  const [value, setvValue] = useRecoilState(state);

  React.useEffect(() => {
    const ws = new WebSocket('test');

    ws.onmessage = (e) => {
      console.log(value);
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      {value.name}
    </div>
  );
};
