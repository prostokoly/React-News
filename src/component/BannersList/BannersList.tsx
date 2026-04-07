import styles from "./bannersList.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import type { INews } from "../../interfaces";
import type { ReactNode } from "react";

interface Props {
    banners?: INews[] | null;
    viewNewsSlot?: (news: INews) => ReactNode;
}

const BannersList = ({ banners, viewNewsSlot }: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => {
                return (
                    <NewsBanner
                        key={banner.id}
                        item={banner}
                        viewNewsSlot={viewNewsSlot}
                    />
                );
            })}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton<Props>(
    BannersList,
    "banner",
    10,
    "row",
);

export default BannersListWithSkeleton;
