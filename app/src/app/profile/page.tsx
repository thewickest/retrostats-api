import { Suspense } from "react";
import LeaderboardInfoList from "src/components/leaderboard/LeaderboardInfoList";
import Loading from "src/components/leaderboard/loading";
import Badges from "src/components/profile/Badges";
import ProfileInfo from "src/components/profile/ProfileInfo";

export default function Profile() {
  return (
    <>
      <div className="flex flex-initial flex-col w-full justify-center p-4 space-y-4">
          <ProfileInfo />
          <div className="flex items-start sm:space-x-4 max-sm:flex-wrap max-sm:space-y-4">
            <div className="grow max-sm:w-full">
              <Suspense fallback={<Loading />}>
                <LeaderboardInfoList />
              </Suspense>
            </div>
            <div className="flex-initial max-sm:w-full">
              <div className="border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base h-full">
                <Badges />
                <Badges />
                <Badges />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}