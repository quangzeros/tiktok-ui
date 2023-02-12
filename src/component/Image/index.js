import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    // fallback : Dự phòng
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(className, styles.wrapper)}
            {...props}
            ref={ref}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        />
    );
}
export default forwardRef(Image);
