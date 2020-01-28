import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage.component.jsx';

 const useImgMode = (key, initialValue) => {
    const [imgMode, setImgMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        
        const image = document.getElementById('pic');
        console.log(image);
        // imgMode ? image.classList.add('.img-mode') : image.classList.remove('.img-mode');

    }, [imgMode]);
    
    return [imgMode, setImgMode];
}
export default useImgMode