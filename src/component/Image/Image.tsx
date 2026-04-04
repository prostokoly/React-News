import styles from "./image.module.css";

interface IProps {
    image: string;
}

const Image = ({ image }: IProps) => {
    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};

export default Image;
