import styles from "./bannersList.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import type { INews } from "../../interfaces";

interface IProps {
    banners?: INews[];
}

const BannersList = ({ banners }: IProps) => {
    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => {
                return <NewsBanner key={banner.id} item={banner} />;
            })}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
