import {
    createBlockEvent,
    HandleBlock
  } from "forta-agent"
  import agent from "./agent"
  
  describe("transaction count agent", () => {
    let handleBlock: HandleBlock
  
    const createBlockEventWithTx = () => createBlockEvent({
      block:{
          difficulty: "",
          gasLimit :"",
          extraData:{} as any,
          gasUsed:"",
          hash:"",
          miner:"",
          logsBloom:"",
          mixHash:"",
          nonce:"",
          number:1,
          parentHash:"",
          receiptsRoot:"",
          sha3Uncles:"",
          size:"",
          stateRoot:"",
          timestamp:1,
          totalDifficulty:"",
          transactions: ["1","2","3"],
          transactionsRoot:'',
          uncles:[]
      }
    })
  
    beforeAll(() => {
      handleBlock = agent.handleBlock
    })
  
    describe("handle block", () => {
      it("transactions count is 3", async () => {
        const txEvent = createBlockEventWithTx()
  
        const findings = await handleBlock(txEvent)
  
        expect(findings[0].metadata.count).toEqual("3")
      })
  
     
    })
  })