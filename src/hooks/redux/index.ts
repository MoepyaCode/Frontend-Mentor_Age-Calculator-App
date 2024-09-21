import { AppDispatch, AppSelector } from "@app-store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<AppSelector>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()