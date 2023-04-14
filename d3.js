
const useLogger = () => {
	const navigation = useNavigation();
  
  return (msg: string) => {
  	sendLog(navigation.screenName, msg);
  };
};

const Component = () => {
	const sendLog = useLogger();
  
  React.useEffect(() => {
  	(async () => {
			const data = await fetch('/data');
      
      sendLog('data 가져오기 성공');
    })();
  }, []);
};
