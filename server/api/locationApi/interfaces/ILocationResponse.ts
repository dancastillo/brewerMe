import { ILocationResults } from './ILocationResults';

export interface ILocationResponse {
    status: string;
    results: ILocationResults[];
}
