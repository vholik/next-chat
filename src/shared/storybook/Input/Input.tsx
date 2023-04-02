import style from './Input.module.scss';
import SearchIcon from '../assets/search-icon.svg';
import Image from 'next/image';
import cn from 'classnames';

export interface Props {
    isPrimary: boolean;
    rounded?: boolean;
    placeholderCentered?: boolean;
    transparentBg?: boolean;
    error?: string;
    placeholder: string;
    imageUrl: string;
    label: string;
    withImage?: boolean;
}

export const Input = (props: Props) => {
    if (props.label) {
        return (
            <label className={style.label}>
                {props.label}
                <input placeholder={props.placeholder} className={style.input}></input>
            </label>
        );
    }

    if (props.isPrimary) {
        return (
            <div
                className={cn(style.wrapper, {
                    [style.centered]: props.placeholderCentered,
                    [style.rounded]: props.rounded,
                })}
            >
                {props.withImage && (
                    <Image
                        src={SearchIcon}
                        width={16}
                        height={16}
                        alt="Search"
                        className={style.icon}
                    />
                )}

                <input
                    placeholder={props.placeholder}
                    className={cn(style.primary, {
                        [style.rounded]: props.rounded,
                    })}
                ></input>
            </div>
        );
    }

    return <input placeholder={props.placeholder} className={style.input}></input>;
};

export default Input;
