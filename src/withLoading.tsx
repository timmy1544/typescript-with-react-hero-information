import React, {useState, useEffect} from 'react';
import { fetchHero, HeroType } from './heroes';
import Loading from './loading';

interface InternalHocProps {
  hero: HeroType
}

interface PassedInHocProps {
  disabled: boolean;
  isLoggedIn: boolean;
}

function heroWithLoadding<T> (WrappedComponent: React.ComponentType<T>) {
  return function WrappedRender({disabled, isLoggedIn}: PassedInHocProps, {...restProps}: Omit<T, keyof InternalHocProps>) {
    const [hero, setHero] = useState<HeroType>({} as HeroType);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchHero().then((hero: HeroType) => {
        setHero(hero);
        setLoading(false);
      })
    }, []);
    return loading ? <Loading /> : <WrappedComponent {...restProps as T } hero={hero}/>
  }
}

export default heroWithLoadding;