import { ViolationReason } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { reportPostViolation } from 'actions/reportPostViolation';
import { AppState } from 'reducers';
import { reportPostViolationReasons } from 'selectors';

interface UseReportPostViolationOutput {
    report: (reasonId: number) => void;
    reasons: ViolationReason[];
}

export function useReportPostViolation(postId: string): UseReportPostViolationOutput {
    const dispatch = useDispatch();
    const reasons = useSelector((state: AppState) => reportPostViolationReasons(state));

    function report(reasonId: number) {
        dispatch(reportPostViolation(postId, reasonId));
    }

    return {
        reasons,
        report,
    };
}
