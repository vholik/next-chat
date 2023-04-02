import Image from 'next/image';
import style from './Button.module.scss';

export interface Props {
    label?: string;
    imageUrl?: string;
    imageAlt?: string;
    variant?: 'primary' | 'secondary' | 'icon';
    imageWidth?: number;
    imageHeight?: number;
    transparentBg?: boolean;
}

export const Button = (props: Props) => {
    if (props.variant === 'secondary') {
        return (
            <button className={style.secondaryBtn}>
                {props.imageUrl && props.imageAlt && props.imageHeight && props.imageWidth && (
                    <Image
                        height={props.imageHeight}
                        src={props.imageUrl}
                        alt={props.imageAlt}
                        width={props.imageWidth}
                    />
                )}

                {props.label}
            </button>
        );
    }
    if (
        props.variant === 'icon' &&
        props.imageUrl &&
        props.imageAlt &&
        props.imageHeight &&
        props.imageWidth
    ) {
        return (
            <button className={props.transparentBg ? style.transparentBtn : style.iconBtn}>
                <Image
                    height={props.imageHeight}
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    width={props.imageWidth}
                />
            </button>
        );
    }

    return <button className={style.button}>{props.label}</button>;
};

export default Button;
