
function AccountContainer() {
    const [ transactions,  setTransactions] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
        });
    }, []);

    function handleFormSubmission(newtransactioninput){
        console.log(newtransactioninput)
        const configurationData =  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newtransactioninput),
        }
        fetch("http://localhost:3000/transactions",configurationData)
         .then((response)=>response.json())
           .then(newItemTRansacted=>setTransactions(transactions=>[...transactions,newItemTRansacted]))
             .catch((error)=>{console.log(error)})
  }
}