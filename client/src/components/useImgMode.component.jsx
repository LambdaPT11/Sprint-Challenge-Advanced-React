import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage.component.jsx';

 const useImgMode = (key, initialValue) => {
    const [imgMode, setImgMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        
        const image = document.getElementsByName('pic');
        image.forEach(pic => {
                imgMode ? pic.classList.add('img-mode') : pic.classList.remove('img-mode')
        })
        // console.log(image);
        

    });
    
    return [imgMode, setImgMode];
}
export default useImgMode