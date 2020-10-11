import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useSelector } from "react-redux";
import useIsWholeNumber from "../../../../../hooks/useIsWholeNumber";
import { ReduxRootState } from "../../../../../metadata/types";
import { ChatMetadata } from "../../../../../redux/reducers/Chat/metadata";

const useHeaderInit = () => {
  const { goBack } = useNavigation();
  
  //Redux
  const { 
    workerData : {
      basePrice,
      lastname,
      name,
      profileImage,
      specialty
    } 
  } = useSelector<ReduxRootState, ChatMetadata.IStore>(({ chat }) => chat,shallowEqual);

  const isWholeNumber = useIsWholeNumber(basePrice);

  return {
    fullName : `${name} ${lastname}`,
    profileImage,
    specialty,
    basePrice : isWholeNumber ? basePrice + '.00' : basePrice,
    GoToBackScreen : () => goBack()
  }
}

export default useHeaderInit;