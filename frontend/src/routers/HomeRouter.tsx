import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import HomePage from "@pages/home/HomePage";
import CelebrationPage from "@pages/celebration/CelebrationPage";
import AlarmPage from "@pages/alarm/AlarmPage";
import MyPage from "@pages/mypage/MyPage";
import FundingRegPage from "@pages/celebration/funding/FundingLinkPage";
import FundingRegInfoPage from "@pages/celebration/funding/FundingInfoPage";
import PaymentPage from "@pages/celebration/funding/PaymentPage";
import RollingMainPage from "@pages/celebration/rolling/RollingMainPage";
import RollingBackgroundSelectPage from "@pages/celebration/rolling/RollingBackgroundSelectPage";
import PaymentDone from "@components/payment/PaymentDone";

import ReviewPage from '@components/home/ReviewPage'

import FundingDetailPage from "@pages/celebration/funding/FundingDetailPage";
import RollingWritePage from "@pages/celebration/rolling/RollingWritePage";
import RollingPreviewPage from "@pages/celebration/rolling/RollingPreviewPage";
import RollingDetailPage from "@pages/celebration/rolling/RollingDetailPage";
import LoginRedirectHandler from "@pages/redirect/LoginRedirectHandler";
import MyCelebratePage from "@pages/mypage/MyCelebratePage";
import MyFundingPage from "@pages/mypage/MyFundingPage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/oauth2" element={<LoginRedirectHandler />} />
      
      <Route path="/celebrate" element={<CelebrationPage />} />
      <Route path="/celebrate/rolling/:pageUri" element={<RollingMainPage />} />
      <Route path="/celebrate/rolling/:pageUri/select" element={<RollingBackgroundSelectPage />} />
      <Route path="/celebrate/rolling/:pageUri/write" element={<RollingWritePage />} />
      <Route path="/celebrate/rolling/:pageUri/preview" element={<RollingPreviewPage />} />
      <Route path="/celebrate/rolling/:pageUri/detail" element={<RollingDetailPage />} />
      <Route path="/celebrate/funding" element={<FundingRegPage />} />
      <Route path="/celebrate/funding-info" element={<FundingRegInfoPage />} />
      <Route path="/celebrate/payment" element={<PaymentPage />} />
      <Route path="/alarm" element={<AlarmPage />} />

      <Route path="/mypage" element={<MyPage />} />
      
      <Route path="/review" element={<ReviewPage />} />
      
      <Route path="/mypage/celebrate" element={<MyCelebratePage />} />
      <Route path="/mypage/funding" element={<MyFundingPage />} />

      <Route path="/detail" element={<FundingDetailPage />} />
      <Route path="/done" element={<PaymentDone />} />
    </Routes>
  );
};

export default HomeRouter;
