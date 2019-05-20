/** Model for a request to get policy statistics for a single ASN.
 *
 * The model here only supports one ASN, even though the API supports a
 * comma-separated list. 
 */
export class AsnPolicyStatsRequest {
  constructor(
    public asn: string,
    public policy: string
  ) {}
}
