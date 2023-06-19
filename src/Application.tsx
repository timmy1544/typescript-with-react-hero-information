import { HeroInformation } from './HeroInformation';
import heroWithLoadding from './withLoading';

const HeroInformationWithLoading = heroWithLoadding(HeroInformation);

const Application = () => {

  return <HeroInformationWithLoading disabled isLoggedIn/>
};

export default Application;