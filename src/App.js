import Card from './components/Card';
import './App.css';

function App() {
let plans = [
  {
    plan:"FREE",
    price:0,
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimted Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  },
  {

    plan:"PLUS",
    price:9,
    user:"5 User",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimted Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:false

  },
  {

    plan:"PRO",
    price:49,
    user:"Unlimted User",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimted Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:" Free Subdomain",
    subDomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  }
]
  return <>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      <Card data={plans[0]}/>
      <Card data={plans[1]}/>
      <Card data={plans[2]}/>
      
      
    </div>
  </div>
</section>
  </>    
}

export default App;
