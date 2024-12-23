import { ReactElement } from "react";
import styles from "./Icon.module.scss";
import clsx from "clsx";

import Adjust from "../../icons/adjust.svg?react";
import Affiliate from "../../icons/affiliate.svg?react";
import AiVersion from "../../icons/ai-version.svg?react";
import Api from "../../icons/api.svg?react";
import ArrowLeft from "../../icons/arrow-left.svg?react";
import ArrowRight from "../../icons/arrow-right.svg?react";
import AutoPrivacy from "../../icons/auto-privacy.svg?react";
import Bill from "../../icons/bill.svg?react";
import BrightnessBoost from "../../icons/brightness-boost.svg?react";
import Center from "../../icons/center.svg?react";
import CheckMark from "../../icons/checkmark.svg?react";
import CheckmarkCircle from "../../icons/checkmark-circle.svg?react";
import CheckmarkCircleColored from "../../icons/checkmark-circle-colored.svg?react";
import ChevronDown from "../../icons/chevron-down.svg?react";
import ClarityLevel from "../../icons/clarity-level.svg?react";
import ContrastBoost from "../../icons/contrast-boost.svg?react";
import Cross from "../../icons/cross.svg?react";
import CrossCircleColored from "../../icons/cross-circle-colored.svg?react";
import DenoiseLevel from "../../icons/denoise-level.svg?react";
import Disabled from "../../icons/disabled.svg?react";
import Download from "../../icons/download.svg?react";
import Edit from "../../icons/edit.svg?react";
import Email from "../../icons/email.svg?react";
import EnhanceType from "../../icons/enhance-type.svg?react";
import Eye from "../../icons/eye.svg?react";
import FullScreen from "../../icons/full-screen.svg?react";
import Google from "../../icons/google.svg?react";
import Grid from "../../icons/grid.svg?react";
import Hdr from "../../icons/hdr.svg?react";
import Home from "../../icons/home.svg?react";
import ImageIcon from "../../icons/image.svg?react";
import InfoCircle from "../../icons/info-circle.svg?react";
import InfoCircleLight from "../../icons/info-circle-light.svg?react";
import Invoice from "../../icons/invoice.svg?react";
import Invoices from "../../icons/invoices.svg?react";
import LensCorrection from "../../icons/lens-correction.svg?react";
import Menu from "../../icons/menu.svg?react";
import MenuImage from "../../icons/menu-image.svg?react";
import Minus from "../../icons/minus.svg?react";
import PerspectiveCorrection from "../../icons/perspective-correction.svg?react";
import Plus from "../../icons/plus.svg?react";
import Preferences from "../../icons/preferences.svg?react";
import Premium from "../../icons/premium.svg?react";
import ResolutionSmall from "../../icons/resolution-small.svg?react";
import ResolutionBig from "../../icons/resolution-big.svg?react";
import ResolutionLarge from "../../icons/resolution-large.svg?react";
import SaturationLevel from "../../icons/saturation-level.svg?react";
import Save from "../../icons/save.svg?react";
import Settings from "../../icons/settings.svg?react";
import Share from "../../icons/share.svg?react";
import SharpenLevel from "../../icons/sharpen-level.svg?react";
import SingleBracket from "../../icons/single-bracket.svg?react";
import SkyReplacement from "../../icons/sky-replacement.svg?react";
import Slash from "../../icons/slash.svg?react";
import Square from "../../icons/square.svg?react";
import Star from "../../icons/star.svg?react";
import Stars from "../../icons/stars.svg?react";
import Subscriptions from "../../icons/subscriptions.svg?react";
import Support from "../../icons/support.svg?react";
import ThreeSixty from "../../icons/threesixty.svg?react";
import Trash from "../../icons/trash.svg?react";
import Upgrade from "../../icons/upgrade.svg?react";
import Upload from "../../icons/upload.svg?react";
import User from "../../icons/user.svg?react";
import ViewPlural from "../../icons/view-plural.svg?react";
import ViewSingular from "../../icons/view-singular.svg?react";
import Wallet from "../../icons/wallet.svg?react";
import WindowPull from "../../icons/window-pull.svg?react";

export type Icons =
    | "adjust"
    | "affiliate"
    | "ai-version"
    | "api"
    | "arrow-left"
    | "arrow-right"
    | "auto-privacy"
    | "bill"
    | "brightness-boost"
    | "center"
    | "checkmark"
    | "checkmark-circle"
    | "checkmark-circle-colored"
    | "chevron-down"
    | "clarity-level"
    | "contrast-boost"
    | "cross"
    | "cross-circle-colored"
    | "denoise-level"
    | "disabled"
    | "download"
    | "edit"
    | "email"
    | "enhance-type"
    | "eye"
    | "full-screen"
    | "google"
    | "grid"
    | "hdr"
    | "home"
    | "image-icon"
    | "info-circle"
    | "info-circle-light"
    | "invoice"
    | "invoices"
    | "lens-correction"
    | "menu"
    | "menu-image"
    | "minus"
    | "perspective-correction"
    | "plus"
    | "preferences"
    | "premium"
    | "resolution-small"
    | "resolution-big"
    | "resolution-large"
    | "saturation-level"
    | "save"
    | "settings"
    | "share"
    | "sharpen-level"
    | "single-bracket"
    | "sky-replacement"
    | "slash"
    | "square"
    | "star"
    | "stars"
    | "subscriptions"
    | "support"
    | "threesixty"
    | "trash"
    | "upgrade"
    | "upload"
    | "user"
    | "view-plural"
    | "view-singular"
    | "wallet"
    | "window-pull"
    | ""
    | string;

export interface IconProps {
    name: Icons;
    className?: string;
    onClick?: () => void;
}

const Icon = ({ name, className, onClick }: IconProps): ReactElement => {
    if (name === "") return <></>;

    const renderIcon = (name: Icons) => {
        switch (name) {
            case "adjust":
                return <Adjust />;
            case "affiliate":
                return <Affiliate />;
            case "ai-version":
                return <AiVersion />;
            case "api":
                return <Api />;
            case "arrow-left":
                return <ArrowLeft />;
            case "arrow-right":
                return <ArrowRight />;
            case "auto-privacy":
                return <AutoPrivacy />;
            case "bill":
                return <Bill />;
            case "brightness-boost":
                return <BrightnessBoost />;
            case "center":
                return <Center />;
            case "checkmark":
                return <CheckMark />;
            case "checkmark-circle":
                return <CheckmarkCircle />;
            case "checkmark-circle-colored":
                return <CheckmarkCircleColored />;
            case "chevron-down":
                return <ChevronDown />;
            case "clarity-level":
                return <ClarityLevel />;
            case "contrast-boost":
                return <ContrastBoost />;
            case "cross":
                return <Cross />;
            case "cross-circle-colored":
                return <CrossCircleColored />;
            case "denoise-level":
                return <DenoiseLevel />;
            case "disabled":
                return <Disabled />;
            case "download":
                return <Download />;
            case "edit":
                return <Edit />;
            case "email":
                return <Email />;
            case "enhance-type":
                return <EnhanceType />;
            case "eye":
                return <Eye />;
            case "full-screen":
                return <FullScreen />;
            case "google":
                return <Google />;
            case "grid":
                return <Grid />;
            case "hdr":
                return <Hdr />;
            case "home":
                return <Home />;
            case "image-icon":
                return <ImageIcon />;
            case "info-circle":
                return <InfoCircle />;
            case "info-circle-light":
                return <InfoCircleLight />;
            case "invoice":
                return <Invoice />;
            case "invoices":
                return <Invoices />;
            case "lens-correction":
                return <LensCorrection />;
            case "menu":
                return <Menu />;
            case "menu-image":
                return <MenuImage />;
            case "minus":
                return <Minus />;
            case "perspective-correction":
                return <PerspectiveCorrection />;
            case "plus":
                return <Plus />;
            case "preferences":
                return <Preferences />;
            case "premium":
                return <Premium />;
            case "resolution-small":
                return <ResolutionSmall />;
            case "resolution-big":
                return <ResolutionBig />;
            case "resolution-large":
                return <ResolutionLarge />;
            case "saturation-level":
                return <SaturationLevel />;
            case "save":
                return <Save />;
            case "settings":
                return <Settings />;
            case "share":
                return <Share />;
            case "sharpen-level":
                return <SharpenLevel />;
            case "single-bracket":
                return <SingleBracket />;
            case "sky-replacement":
                return <SkyReplacement />;
            case "slash":
                return <Slash />;
            case "square":
                return <Square />;
            case "star":
                return <Star />;
            case "stars":
                return <Stars />;
            case "subscriptions":
                return <Subscriptions />;
            case "support":
                return <Support />;
            case "threesixty":
                return <ThreeSixty />;
            case "trash":
                return <Trash />;
            case "upgrade":
                return <Upgrade />;
            case "upload":
                return <Upload />;
            case "user":
                return <User />;
            case "view-plural":
                return <ViewPlural />;
            case "view-singular":
                return <ViewSingular />;
            case "wallet":
                return <Wallet />;
            case "window-pull":
                return <WindowPull />;
            default:
                <></>;
        }
    };

    return (
        <span className={clsx(styles.wrapper, className)} onClick={onClick}>
            {renderIcon(name)}
        </span>
    );
};

export { Icon };
