'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import {CustomButton} from './';
import { updateSearchParams } from '@/utils';

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {

  const router = useRouter();

/**
 * Handles the navigation logic for the "Show More" button by calculating
 * the new limit for car results based on the current page number. Updates
 * the URL's "limit" search parameter with the new limit and navigates to
 * the updated URL.
 */
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
