import { ViolationReason } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { reportUserViolation } from 'actions/userReportViolation';
import { AppState } from 'reducers';
import { reportUserViolationReasons } from 'selectors';

interface UseReportUserViolationOutput {
    report: (reasonId: number) => void;
    reasons: ViolationReason[];
}

export function useReportUserViolation(userId: number): UseReportUserViolationOutput {
    const dispatch = useDispatch();
    const reasons = useSelector((state: AppState) => reportUserViolationReasons(state));

    function report(reasonId: number) {
        dispatch(reportUserViolation(userId, reasonId));
    }

    return {
        reasons,
        report,
    };
}
