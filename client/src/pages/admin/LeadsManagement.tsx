import { AdminLayout } from "@/components/AdminLayout";
import { useAllLeads, useAllContacts } from "@/hooks/use-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Mail, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LeadsManagement() {
  const { data: leads, isLoading: leadsLoading } = useAllLeads();
  const { data: contacts, isLoading: contactsLoading } = useAllContacts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Leads & Contacts</h1>
          <p className="text-muted-foreground">View demo leads and contact messages</p>
        </div>

        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList>
            <TabsTrigger value="leads" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Demo Leads
              {leads && <Badge variant="secondary">{leads.length}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Messages
              {contacts && <Badge variant="secondary">{contacts.length}</Badge>}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            {leadsLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Demo Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Business</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Submitted</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads?.map((lead: any) => (
                        <TableRow key={lead.id}>
                          <TableCell className="font-medium">#{lead.id}</TableCell>
                          <TableCell className="font-medium">{lead.name}</TableCell>
                          <TableCell>
                            <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                              {lead.email}
                            </a>
                          </TableCell>
                          <TableCell>{lead.businessName || "—"}</TableCell>
                          <TableCell>
                            {lead.phone ? (
                              <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                                {lead.phone}
                              </a>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                          <TableCell>{formatDate(lead.createdAt)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {leads?.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      No demo leads yet
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="contacts">
            {contactsLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-4">
                {contacts?.map((contact: any) => (
                  <Card key={contact.id} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{contact.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                              {contact.email}
                            </a>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">
                            {formatDate(contact.createdAt)}
                          </p>
                          <Badge variant="secondary" className="mt-1">
                            #{contact.id}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {contacts?.length === 0 && (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-center py-12 text-muted-foreground">
                        No contact messages yet
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}

