
function AccountContainer() {
    const [ transactions,  setTransactions] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
        });
    }, []);
}