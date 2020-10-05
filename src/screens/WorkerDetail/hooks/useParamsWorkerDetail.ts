import { useNavigation } from "@react-navigation/native"
import { shallowEqual, useSelector } from "react-redux"
import { ReduxRootState } from "../../../metadata/types"
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata"

const useParamsWorkerDetail = () => {
  const { navigate } = useNavigation();
  const { 
    detailData : {
      availability,
      basePrice,
      id,
      location,
      specialty,
      user,
      backgroundImage
    } 
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker,shallowEqual);
  
  return {
    id,
    fullName : `${user?.name} ${user?.lastname}`,
    basePrice,
    profileImage : user?.profileImage,
    location : {
      coords : location,
      mapLocation : `${user?.district.province.name} ,${user?.district.name}`
    },
    specialty : specialty?.name,
    availability,
    backgroundImage,
    NavigateToChat : () => navigate('worker-chat')
  }
}

export default useParamsWorkerDetail;