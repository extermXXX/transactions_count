import { 
  BlockEvent, 
  Finding, 
  HandleBlock, 
  FindingSeverity, 
  FindingType,
} from 'forta-agent'




const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];
  const count = blockEvent.block.transactions.length
  findings.push(Finding.fromObject({
      name: "NewBlockDetcted",
      description: `detected block ${blockEvent.blockNumber}`,
      alertId: "FORTA-160",
      severity: FindingSeverity.Info,
      type: FindingType.Info,
      metadata:{
        count:`${count}`
      }
    }))
  
  
  return findings;
}

export default {
  handleBlock
}